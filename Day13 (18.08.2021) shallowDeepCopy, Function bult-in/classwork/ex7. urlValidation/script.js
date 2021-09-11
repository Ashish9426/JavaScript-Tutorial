var url = "https://www.google.com";
if(url.startsWith("https://") || url.startsWith("http://") && url.endsWith(".com"))
{
    console.log("valid url")
}
else
{
    console.log("invalid Url")
}