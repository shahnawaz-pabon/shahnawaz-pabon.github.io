export function addComments(commentBox) {
  const utteranceScript = document.createElement("script");
  const utteranceTheme = localStorage.getItem("isDark")
    ? "icy-dark"
    : "boxy-light";

  utteranceScript.async = true;
  utteranceScript.src = "https://utteranc.es/client.js";
  utteranceScript.setAttribute("repo", "shahnawaz-pabon/my-site-comments");
  utteranceScript.setAttribute("issue-term", "pathname");
  utteranceScript.setAttribute("id", "utterances");
  utteranceScript.setAttribute("theme", utteranceTheme);
  utteranceScript.setAttribute("crossorigin", "anonymous");

  if (commentBox && commentBox.current) {
    commentBox.current.appendChild(utteranceScript);
  } else {
    console.log(`Error adding utterances comments on: ${commentBox}`);
  }
}
