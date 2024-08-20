Blog
  = meta:Meta doc:Document
  { return (
    "const meta = " + meta + "\nreturn (" 
    + "<>"
    + "<Head>"
    +   "<title>{meta.name}</title>"
    +   "<meta name='description' content={meta.name} />"
    +   "<meta name='theme-color' content='#228B22' />"
    + "</Head>"
    + doc
    + "</>"
    )
  }

Meta
  = "{" body:[^}]+ end:"}" d:EOL+
  { return "{" + body.join("") + "}" }

Document
	= body:(Row / Block)+
    { 
      return (
        "<Stack direction='column' maxWidth='100%' align='center' spacing='10' pt='5' pb='20'>" 
        +   body.join("") 
        + "</Stack>"
      )
    }

Row
  = begin:"{" " "? caption:[^\n]* mid:"\n"+ body:([ ]+ Block EOL*)+ end:"}" w:EOL*
    {
      return ( 
        "<div>"
        +   "<Center maxWidth='100%'>"
        +     "<Stack spacing='25px' direction={{base: 'column', xl: 'row'}}>" 
        +       body.map((item) => item[1]).join("") 
        +     "</Stack>"
        +   "</Center>"
        +   "<Center maxWidth='100%' pt='5'>"
        +     "<Text fontSize='md'>" 
        +       caption.join("") 
        +     "</Text>"
        +   "</Center>" 
        + "</div>"
      )
    }

Block
	= Image / Heading / Paragraph
    
Heading
	= h:'#'+ Spacing body:Text EOL+
    {
      const sizes = ["3xl", "2xl", "xl", "lg", "md", "sm", "xs"]
      return (
        "<Center maxWidth='100%'>"
        +   "<Heading pl='3' pr='3' as='h" + h.length + "' size= '" + sizes[h.length] + "'>"
        +     body 
        +   "</Heading>"
        + "</Center>"
      ) 
    }

Paragraph
	= body:Line+ tail:EOL
    { return ( 
      "<Center maxW='100%'>"
      +   "<Text fontSize='xl' pl='3' pr='3' maxWidth={{ base: '100vw', xl: '70vw' }}>"
      +     body.join("")
      +   "</Text>"
      + "</Center>"
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
        "<b>"
      +   body.join("")
      + "</b>"
      )
    }
    
Italic
  = '_' body:([^_\n]+) '_'
    { return (
        "<i>"
      +   body.join("")
      + "</i>"
      )
    }
     
Code
	= '`' body:([^\n`]+) '`'
    { return (
        "<code>"
      +   body.join("")
      + "</code>"
      )
    }


Link 
	= "[" head:([^\]\n]+) "](" body:([^)\n]*) ")" " "*
    { return (
      "<Link href='" + body.join("") + "' color='blue' isExternal>"
      +   head.join("") 
      + "</Link>"
      )
    }
    
Image 
	= "![" caption:([^\]\n]*) "](" src:([^)\n]*) ")" " "* EOL+
    { return ( 
        "<div>"
      +   "<Center maxWidth='100vw' pt='5'>"
      +     "<Box boxSize='md' position='relative' display='block' pl='2' pr='2'>"
      +       "<Image src={`${process.env.NEXT_PUBLIC_IMG_HOST}/" + src.join("") 
      +       "`} alt='Loading image' objectFit='contain' {...{ layout: 'fill' }} />"
      +     "</Box>"
      +   "</Center>"
      +   "<Center maxWidth='100%' pt='3'>"
      +     "<Text fontSize='md' pl='5' pr='5'>" 
      +       caption.join("") 
      +     "</Text>" 
      +   "</Center>"
      + "</div>"
      )  
    }
    
_ "whitespace"
  = [ \t\n\r\0]*
 
Spacing
	= ' ' / '\t'

EOL
	= '\r'? '\n'
