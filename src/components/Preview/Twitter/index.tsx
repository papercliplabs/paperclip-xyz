import Head from "next/head";

const TwitterHead = ({ 
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
    children:any;
    }) => {
    return (
      <>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@papercliplabs" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@papercliplabs" />
        <meta property="og:url" content={ogUrl} />
        <meta name="twitter:image" content={ogImage} />
      </>
    );
  };
  
  export default TwitterHead;