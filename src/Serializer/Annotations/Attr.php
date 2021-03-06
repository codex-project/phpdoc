<?php

namespace Codex\Phpdoc\Serializer\Annotations;

use Codex\Attributes\AttributeDefinition;
use Codex\Attributes\AttributeType as T;
use Doctrine\Common\Annotations\Annotation\Target;
use phpDocumentor\Reflection\DocBlock;
use phpDocumentor\Reflection\DocBlockFactory;
use phpDocumentor\Reflection\Types\Array_;
use phpDocumentor\Reflection\Types\Object_;
use ReflectionClass;
use ReflectionProperty;
use Reflector;

/**
 * @Annotation
 * @Target({"PROPERTY", "CLASS"})
 */
class Attr
{
    /** @var string */
    private $name;

    /** @var string|T */
    private $type;

    /** @var string */
    private $apiType;

    /** @var bool */
    private $extend = false;

    /** @var bool */
    private $array = false;

    /** @var bool */
    private $new = false;

    /** @var bool */
    private $nonNull = false;

    /** @var bool */
    private $arrayNonNull = false;

    /**
     * Attr constructor.
     */
    public function __construct(array $values)
    {
        if ( ! isset($values[ 'name' ]) && isset($values[ 'value' ])) {
            $this->name = $values[ 'value' ];
        }

        foreach (array_except($values, 'value') as $key => $value) {
            $this->$key = $value;
        }
    }

    protected function getApiTypeOpts()
    {
        $opts = [];
        $keys = [ 'extend', 'array', 'new', 'nonNull', 'arrayNonNull' ];
        foreach ($keys as $key) {
            if ($this->$key === true) {
                $opts[] = $key;
            }
        }
        return $opts;
    }

    /** @var DocBlock|false */
    protected $docblock = false;

    /** @return DocBlock|false */
    protected function resolveDocblock(Reflector $reflector)
    {
        if ($reflector instanceof ReflectionClass || $reflector instanceof ReflectionProperty) {
            $docblock = $reflector->getDocComment();
            if ($docblock !== false) {
                $docblock = DocBlockFactory::createInstance()->create($docblock);
            }
            $this->docblock = $docblock;
        }
        return $this->docblock;
    }

    /** @var ReflectionClass */
    protected $class;

    public function setTargetClass(ReflectionClass $class)
    {
        $this->class = $class;
        $docblock    = $this->resolveDocblock($class);

        if ($this->apiType === null) {
            $this->apiType = ltrim(str_replace_first($class->getNamespaceName(), '', $class->getName()), '\\');
        }
    }

    /** @var ReflectionProperty */
    protected $property;

    public function setTargetProperty(ReflectionProperty $property)
    {
        $this->property = $property;
        $docblock       = $this->resolveDocblock($property);

        if ($this->name === null) {
            $this->name = $property->getName();
        }

        if ($this->type === null && $docblock !== false && $docblock->hasTag('var')) {
            /** @var \phpDocumentor\Reflection\DocBlock\Tags\Var_ $tag */
            $tag = $docblock->getTagsByName('var')[ 0 ];
            /** @var \phpDocumentor\Reflection\Type $type */
            $type = $tag->getType();
            if ($type !== null) {
                $this->type = (string)$type;
            }
        }

        if ($this->new || $this->extend) {
            /** @var \phpDocumentor\Reflection\DocBlock\Tags\Var_ $tag */
            $tag  = $docblock->getTagsByName('var')[ 0 ];
            $type = $tag->getType();
            if ($type instanceof Array_) {
                $type = $type->getValueType();
            }
            if ($type instanceof Object_) {
                if ($this->apiType === null) {
                    $this->apiType = ($type->getFqsen() ? $type->getFqsen()->getName() : null);
                    $this->type    = T::ARRAY(T::MAP);
                }
                $type = (string)$type->getFqsen();
            }
            $this->childType = $type;
        }


        if ($this->type === 'int') {
            $this->type = T::INT;
        }
        if ($this->type === 'bool') {
            $this->type = T::BOOL;
        }

        if ($this->apiType === null && T::has($this->type)) {
            $this->apiType = with(T::get($this->type))->toApiType();
        }

        if ($this->new && $this->apiType !== null) {
            $this->apiType = 'Phpdoc' . $this->apiType;
        }
    }


    protected $childType;

    public function hasChildType()
    {
        return isset($this->childType);
    }

    public function getChildType()
    {
        return $this->childType;
    }

    /** @var AttributeDefinition */
    protected $definition;

    public function getAttributeDefinition()
    {
        if ( ! isset($this->definition)) {
            $this->definition = with(new AttributeDefinition())->name($this->name)->type($this->type);
            $this->definition->api($this->apiType, $this->getApiTypeOpts());
        }
        return $this->definition;
    }

}
