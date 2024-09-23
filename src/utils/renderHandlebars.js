import handlebars from "handlebars";
import documents from "../views/documents";
import section from "../views/section";
import blocks from "../views/blocks";

function render(layoutBlocks, documentId) {
  // Reduce the layoutBlocks to generate inner HTML
  const innerHTML = layoutBlocks.reduce((acc, layoutBlock) => {
    // Compile the block template
    const blockHbs = blocks[layoutBlock.blockId]?.hbs;
    if (!blockHbs) return acc; // Skip if block template not found

    const blockTemplate = handlebars.compile(blockHbs);
    const blockHTML = blockTemplate(layoutBlock.data);

    // Compile the section template
    const sectionTemplate = handlebars.compile(section);
    const sectionHTML = sectionTemplate({
      content: blockHTML,
      uuid: layoutBlock.uuid,
    });

    return `${acc}${sectionHTML}`; // Accumulate the HTML output
  }, "");

  // Compile the document template with the generated content
  const documentTemplate = handlebars.compile(documents[documentId]?.hbs);
  return documentTemplate ? documentTemplate({ content: innerHTML }) : ''; // Return the final HTML or an empty string if not found
}

export default render;
