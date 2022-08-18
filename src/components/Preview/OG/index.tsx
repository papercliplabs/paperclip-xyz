import Head from "next/head";

const OgHead = ({ 
    description, 
    ogUrl, 
    ogImage, 
    ogTitle,
    children, 
}: {
    description: string; 
    ogUrl: string;
    ogImage: any;
    ogTitle: string;
    children: any,
    }) => {
    return (
      <>
        <meta property="og:url" content={ogUrl} key="ogurl" />
        <meta property="og:image" content={ogImage} key="ogimage" />
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Paperclip Labs" key="ogsitename" />
        <meta property="og:title" content={ogTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </>
    );
  };
  
  export default OgHead;