Blog
  = meta:Meta doc:Document
  { return {
    style: JSON.parse(meta),
    blog: doc
    }
  }

Meta
  = "{" body:[^}]+ end:"}" d:EOL+
  { return "{" + body.join("") + "}" }

Document
	= body:(Row / Block)+
    { return (
        <Stack 
          direction="column" 
          maxW="100%" 
          spacing="10" 
          pt="5" 
          pb="20">
            {body.map((item) => { 
              return (
                <div 
                  outline="5px" 
                  key={shortid.generate()}>
                    {item}
                </div>
              )} 
            )}
        </Stack>
      )
    }

Row
  = begin:"{" " "? caption:[^\n]* mid:"\n"+ body:([ ]+ Block EOL*)+ end:"}" w:EOL*
    { 
      let i = 100;
      return (
        <div key={shortid.generate()}>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              {body.map((item, key) => <div key={shortid.generate()}>{item}</div>)}
            </Stack>
          </Center>

          <Center maxW="100%" pt="5">
            <Text 
              fontSize="md">
                {caption.join("")}
            </Text>
          </Center>
        </div>
      )
    }

Block
	= Image / Heading / Paragraph
    
Heading
	= h:'#'+ Spacing body:Text EOL+
    {
      const sizes = ["3xl", "2xl", "xl", "lg", "md", "sm", "xs"]
      return (
        <Center 
          maxW="100%">
            <Heading 
              pl="3"
              pr="3"
              as={`h${h.length}`} 
              size={sizes[h.length]}>
                {body}
            </Heading>
        </Center>
      ) 
    }

Paragraph
	= body:Line+ tail:EOL
    { return ( 
      <Center 
      maxW="100%">
        <Text 
          fontSize="xl" 
          pl="3" 
          pr="3"
          maxWidth={["100%", "80%"]}>
            {body}
        </Text>
      </Center>
      )
    }

Line
	= head:(Link / Bold / Italic / Code / Text) EOL
    { return head }

Text
	= body:([^\n]+)
    {  return body.join("") }
    

Bold 
  = '*' body:([^*\n]+) '*'
    { return (
        <b 
          key={shortid.generate()}>
            {body.join("")}
        </b>
      )
    }
    
Italic
  = '_' body:([^_\n]+) '_'
    { return (
      <i 
        key={shortid.generate()}>
          {body.join("")}
      </i>
      )
    }
     
Code
	= '`' body:([^\n`]+) '`'
    { return (
      <code 
        key={shortid.generate()}>
          {body.join("")}
      </code>
      )
    }


Link 
	= "[" head:([^\]\n]+) "](" body:([^)\n]*) ")" " "*
    { return (
      <Link 
        href={body.join("")} 
        color="blue"
        key={shortid.generate()}
        isExternal>
          {head.join("")}
      </Link>
      )
    }
    
Image 
	= "![" caption:([^\]\n]*) "](" src:([^)\n]*) ")" " "* EOL+
    { return ( 
      <div key={shortid.generate()}>
        <Center 
          maxW="100%" 
          pt="5">
            <Box 
              boxSize="md" 
              position="relative" 
              display="block" 
              pl="2" 
              pr="2">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${src.join("")}`}
                  alt="Loading image"
                  objectFit="cover"
                  {...{ layout: "fill" }}
                />
            </Box>
        </Center>
        <Center 
          maxW="100%" 
          pt="3">
            <Text 
              fontSize="md" 
              pl="5" 
              pr="5">
                {caption.join("")}
            </Text>
        </Center>
      </div>
      )    
    }
    
_ "whitespace"
  = [ \t\n\r\0]*
 
Spacing
	= ' ' / '\t'

EOL
	= '\r'? '\n'
