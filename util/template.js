const generateTemplate = (itemName) => (
    `# ${itemName}

- 

${'```\n\n```'}

<br>

#### [Back](../readme.md#css-quick-guide)`
)

export default generateTemplate