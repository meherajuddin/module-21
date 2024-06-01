const lyrics =
  "tumi bondu kala pakhi ami bondu ki vosonto kale tomai bolte parini shada shada kala cog jomese shada kala hoisi ami rog majare bosonto khale";
// const searsh = lyrics.includes("pokhi");
// console.log(searsh);
const searshString = "pokhi";
const sorcstring = lyrics.includes(searshString);
const ssss = lyrics.toLowerCase();
const scs = searshString.toLowerCase();
const sees = ssss.includes(scs);
const seen = lyrics.toLocaleLowerCase().includes(searshString.toLowerCase());
console.log(seen);

// indexOf
console.log(lyrics.indexOf("kailla"));
console.log(lyrics.indexOf("Tumi"));
//
if (lyrics.indexOf("sada") !== -1) {
  console.log("existes inside the string");
} else {
  console.log("cannot find of ");
}
// starswith
console.log(lyrics.startsWith("tumi"));
// endswith
const filename = "mybiodata.pdf";
const otherFile = "mypic.png";
filename.endsWith(".pdf");
