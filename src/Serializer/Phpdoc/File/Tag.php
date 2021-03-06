<?php
/**
 * Copyright (c) 2018. Codex Project.
 *
 * The license can be found in the package and online at https://codex-project.mit-license.org.
 *
 * @copyright 2018 Codex Project
 * @author    Robin Radic
 * @license   https://codex-project.mit-license.org MIT License
 */

namespace Codex\Phpdoc\Serializer\Phpdoc\File;

use Codex\Phpdoc\Contracts\Serializer\SelfSerializable;
use Codex\Phpdoc\Serializer\Annotations\Attr;
use Codex\Phpdoc\Serializer\Concerns\SerializesSelf;
use Codex\Phpdoc\Serializer\Phpdoc\Properties\LineProperty;
use Codex\Phpdoc\Serializer\Phpdoc\Properties\TypeProperty;
use JMS\Serializer\Annotation as Serializer;

/**
 * This is the class Tag.
 *
 * @author  Robin Radic
 *
 * @Serializer\XmlRoot("tag")
 */
class Tag implements SelfSerializable
{
    use SerializesSelf,
        TypeProperty,
        LineProperty;

    /**
     * @var string
     * @Serializer\Type("string")
     * @Serializer\XmlAttribute()
     * @Attr()
     */
    private $name;

    /**
     * @var string
     * @Serializer\Type("string")
     * @Serializer\XmlAttribute()
     * @Attr()
     */
    private $description;

    /**
     * @var string
     * @Serializer\Type("string")
     * @Serializer\XmlAttribute()
     * @Attr()
     */
    private $link;

    /**
     * @var string
     * @Serializer\Type("string")
     * @Serializer\XmlAttribute()
     * @Attr()
     */
    private $refers;

    /**
     * @var string
     * @Serializer\Type("string")
     * @Serializer\XmlAttribute()
     * @Attr()
     */
    private $variable;


    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     *
     * @return Tag
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return int
     */
    public function getLine(): int
    {
        return $this->line;
    }

    /**
     * @param int $line
     *
     * @return Tag
     */
    public function setLine(int $line): self
    {
        $this->line = $line;

        return $this;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     *
     * @return Tag
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return string
     */
    public function getLink(): string
    {
        return $this->link;
    }

    /**
     * @param string $link
     *
     * @return Tag
     */
    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    /**
     * @return string
     */
    public function getRefers(): string
    {
        return $this->refers;
    }

    /**
     * @param string $refers
     *
     * @return Tag
     */
    public function setRefers(string $refers): self
    {
        $this->refers = $refers;

        return $this;
    }

    /**
     * @return string
     */
    public function getVariable(): string
    {
        return $this->variable;
    }

    /**
     * @param string $variable
     *
     * @return Tag
     */
    public function setVariable(string $variable): self
    {
        $this->variable = $variable;

        return $this;
    }


}
