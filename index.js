const { generateStringChangelog } = require("./test");

function getSecondIdxOfVersionTags(arr) {
    const titles = arr.filter(item => /^.*[0-9]+\.[0-9]+\.[0-9]+\s\([0-9]{4}-[0-9]{2}-[0-9]{2}\).*/.test(item) && item)
    return arr.indexOf(titles[1])
}

async function main() {
  let changelog = await generateStringChangelog("v");
  changelog = changelog.split("\n").filter((line) => line !== "")
  const idx = getSecondIdxOfVersionTags(changelog)

  console.log(changelog.slice(0, idx).join('\n'))
}
main()