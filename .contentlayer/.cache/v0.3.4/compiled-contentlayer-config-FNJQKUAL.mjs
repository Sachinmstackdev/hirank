// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `{projects,case-studies}/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    subtitle: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    tagline: {
      type: "string",
      required: true
    },
    clientName: {
      type: "string",
      required: true
    },
    industry: {
      type: "string",
      required: true
    },
    timeframe: {
      type: "string",
      required: true
    },
    heroImage: {
      type: "string",
      required: true
    },
    logoImage: {
      type: "string",
      required: false
    },
    liveUrl: {
      type: "string",
      required: true
    },
    executiveSummary: {
      type: "list",
      of: {
        type: "json",
        options: {
          title: { type: "string", required: true },
          description: { type: "string", required: true }
        }
      },
      required: true
    },
    clientDescription: {
      type: "string",
      required: true
    },
    challenges: {
      type: "list",
      of: {
        type: "json",
        options: {
          title: { type: "string", required: true },
          description: { type: "string", required: true },
          beforeState: { type: "string", required: false },
          icon: { type: "string", required: false }
        }
      },
      required: true
    },
    approach: {
      type: "string",
      required: true
    },
    solutions: {
      type: "list",
      of: {
        type: "json",
        options: {
          title: { type: "string", required: true },
          description: { type: "string", required: true },
          icon: { type: "string", required: false }
        }
      },
      required: true
    },
    technologies: {
      type: "list",
      of: {
        type: "json",
        options: {
          name: { type: "string", required: true },
          icon: { type: "string", required: false }
        }
      },
      required: true
    },
    process: {
      type: "list",
      of: {
        type: "json",
        options: {
          title: { type: "string", required: true },
          description: { type: "string", required: true },
          outcomeText: { type: "string", required: false },
          icon: { type: "string", required: false }
        }
      },
      required: true
    },
    outcomes: {
      type: "list",
      of: {
        type: "json",
        options: {
          title: { type: "string", required: true },
          value: { type: "string", required: true },
          description: { type: "string", required: false }
        }
      },
      required: true
    },
    keyTakeaways: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    galleryImages: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    testimonial: {
      type: "json",
      options: {
        quote: { type: "string", required: true },
        author: { type: "string", required: true },
        position: { type: "string", required: true },
        company: { type: "string", required: true },
        avatar: { type: "string", required: true }
      },
      required: true
    }
  },
  computedFields: {
    type: {
      type: "string",
      resolve: () => "Project"
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/projects/${doc._raw.sourceFileName.replace(/\.mdx$/, "")}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export {
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-FNJQKUAL.mjs.map
