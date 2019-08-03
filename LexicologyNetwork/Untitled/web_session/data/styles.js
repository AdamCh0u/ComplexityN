var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 10,
      "width" : 25.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "height" : 25.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(51,51,51)",
      "shape" : "ellipse",
      "border-color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "background-color" : "rgb(127,205,187)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(153,153,153)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "width" : 1.0,
      "color" : "rgb(51,51,51)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10,
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge[interaction = 'pp']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = 'pd']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Solid",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 14,
      "width" : 40.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "height" : 40.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "shape" : "ellipse",
      "border-color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "background-color" : "rgb(102,102,102)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(204,204,204)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "width" : 12.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10,
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 9,
      "width" : 12.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 12.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(51,51,51)",
      "shape" : "rectangle",
      "border-color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "background-color" : "rgb(204,204,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(76,76,76)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 2.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Nested Network Style",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "width" : 60.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 40.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "shape" : "ellipse",
      "border-color" : "rgb(0,0,0)",
      "border-width" : 2.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(shared_name)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "text-valign" : "bottom"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "border-color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(64,64,64)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 1.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Universe",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 18,
      "width" : 40.0,
      "font-family" : "Monospaced.plain",
      "font-weight" : "normal",
      "height" : 40.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(255,255,255)",
      "shape" : "ellipse",
      "border-color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "background-color" : "rgb(0,0,0)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "dashed",
      "line-color" : "rgb(153,153,153)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "width" : 2.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BioPAX",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "width" : 20.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 20.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "shape" : "ellipse",
      "border-color" : "rgb(0,102,102)",
      "border-width" : 2.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'SimplePhysicalEntity']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Rna']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Protein']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "shape" : "diamond"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'RnaRegion']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'DnaRegion']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'PhysicalEntity']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'SmallMolecule']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Dna']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Protein-phosphorylated']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "border-color" : "rgb(0,102,102)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(64,64,64)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(64,64,64)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 1.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(64,64,64)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_NONCOMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_OTHER']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_UNCOMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'cofactor']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_ALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'right']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_ALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'controlled']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'contains']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_UNKMECH']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_IRREVERSIBLE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_COMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_UNKMECH']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_NONALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Big Labels",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 24,
      "width" : 5.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 5.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(51,51,51)",
      "shape" : "ellipse",
      "border-color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(183,183,183)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 1.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Marquee",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "bottom",
      "text-halign" : "center",
      "font-size" : 12,
      "width" : 20.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 20.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(102,102,102)",
      "shape" : "ellipse",
      "border-color" : "rgb(255,255,255)",
      "border-width" : 10.0,
      "background-color" : "rgb(0,204,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "target-arrow-shape" : "triangle",
      "line-style" : "dashed",
      "line-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(255,255,255)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 2.0,
      "color" : "rgb(102,102,102)",
      "source-arrow-color" : "rgb(255,255,255)",
      "font-size" : 8,
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Minimal",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 9,
      "width" : 42.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 42.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(51,51,51)",
      "shape" : "rectangle",
      "border-color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(76,76,76)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 2.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BioPAX_SIF",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 12,
      "width" : 60.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 40.0,
      "text-opacity" : 1.0,
      "background-opacity" : 0.49019607843137253,
      "border-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "shape" : "ellipse",
      "border-color" : "rgb(0,0,0)",
      "border-width" : 2.0,
      "background-color" : "rgb(255,153,153)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "background-color" : "rgb(153,204,255)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(0,0,0)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 4.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge[interaction = 'interacts-with']",
    "css" : {
      "line-color" : "rgb(0,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "line-color" : "rgb(240,144,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "line-color" : "rgb(0,0,192)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "line-color" : "rgb(112,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "line-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[interaction = 'reacts-with']",
    "css" : {
      "line-color" : "rgb(0,255,0)"
    }
  }, {
    "selector" : "edge[interaction = 'neighbor-of']",
    "css" : {
      "line-color" : "rgb(0,170,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "line-color" : "rgb(0,160,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "line-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "line-color" : "rgb(160,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "line-color" : "rgb(247,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'in-complex-with']",
    "css" : {
      "line-color" : "rgb(240,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "line-color" : "rgb(0,204,240)"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "line-color" : "rgb(112,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'interacts-with']",
    "css" : {
      "line-color" : "rgb(0,85,0)",
      "target-arrow-color" : "rgb(0,85,0)",
      "source-arrow-color" : "rgb(0,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "line-color" : "rgb(240,144,0)",
      "target-arrow-color" : "rgb(240,144,0)",
      "source-arrow-color" : "rgb(240,144,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "line-color" : "rgb(0,0,192)",
      "target-arrow-color" : "rgb(0,0,192)",
      "source-arrow-color" : "rgb(0,0,192)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "line-color" : "rgb(112,0,0)",
      "target-arrow-color" : "rgb(112,0,0)",
      "source-arrow-color" : "rgb(112,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[interaction = 'reacts-with']",
    "css" : {
      "line-color" : "rgb(0,255,0)",
      "target-arrow-color" : "rgb(0,255,0)",
      "source-arrow-color" : "rgb(0,255,0)"
    }
  }, {
    "selector" : "edge[interaction = 'neighbor-of']",
    "css" : {
      "line-color" : "rgb(0,170,0)",
      "target-arrow-color" : "rgb(0,170,0)",
      "source-arrow-color" : "rgb(0,170,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "line-color" : "rgb(0,160,160)",
      "target-arrow-color" : "rgb(0,160,160)",
      "source-arrow-color" : "rgb(0,160,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "line-color" : "rgb(0,0,255)",
      "target-arrow-color" : "rgb(0,0,255)",
      "source-arrow-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "line-color" : "rgb(160,0,0)",
      "target-arrow-color" : "rgb(160,0,0)",
      "source-arrow-color" : "rgb(160,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "line-color" : "rgb(247,85,0)",
      "target-arrow-color" : "rgb(247,85,0)",
      "source-arrow-color" : "rgb(247,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'in-complex-with']",
    "css" : {
      "line-color" : "rgb(240,0,160)",
      "target-arrow-color" : "rgb(240,0,160)",
      "source-arrow-color" : "rgb(240,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "line-color" : "rgb(0,204,240)",
      "target-arrow-color" : "rgb(0,204,240)",
      "source-arrow-color" : "rgb(0,204,240)"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "line-color" : "rgb(112,0,160)",
      "target-arrow-color" : "rgb(112,0,160)",
      "source-arrow-color" : "rgb(112,0,160)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 20,
      "width" : 75.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 35.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "shape" : "roundrectangle",
      "border-color" : "rgb(204,204,204)",
      "border-width" : 0.0,
      "background-color" : "rgb(137,208,245)",
      "content" : "data(shared_name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(132,132,132)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "width" : 5.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Gradient1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "bottom",
      "text-halign" : "right",
      "font-size" : 8,
      "width" : 30.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 30.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(204,204,204)",
      "shape" : "ellipse",
      "border-color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "background-color" : "rgb(0,0,0)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(102,102,102)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 1.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default black",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "bottom",
      "text-halign" : "right",
      "font-size" : 12,
      "width" : 15.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 15.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(204,204,204)",
      "shape" : "ellipse",
      "border-color" : "rgb(0,153,0)",
      "border-width" : 0.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(0,153,0)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "width" : 2.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample3",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "bottom",
      "text-halign" : "right",
      "font-size" : 14,
      "width" : 20.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 20.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(206,206,206)",
      "shape" : "ellipse",
      "border-color" : "rgb(255,255,255)",
      "border-width" : 8.0,
      "background-color" : "rgb(61,154,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 2.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Ripple",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 8,
      "width" : 50.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 50.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(19,58,96)",
      "shape" : "ellipse",
      "border-color" : "rgb(51,153,255)",
      "border-width" : 20.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,204)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(51,153,255)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 3.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Curved",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "bottom",
      "text-halign" : "right",
      "font-size" : 14,
      "width" : 18.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 18.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(102,102,102)",
      "shape" : "ellipse",
      "border-color" : "rgb(255,255,255)",
      "border-width" : 7.0,
      "background-color" : "rgb(254,196,79)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "triangle",
      "line-style" : "solid",
      "line-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(255,255,255)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 3.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(255,255,255)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample2",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "right",
      "font-size" : 20,
      "width" : 50.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "height" : 50.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(102,102,102)",
      "shape" : "ellipse",
      "border-color" : "rgb(255,255,255)",
      "border-width" : 15.0,
      "background-color" : "rgb(58,127,182)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "content" : "",
      "target-arrow-shape" : "none",
      "line-style" : "solid",
      "line-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 20.0,
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Directed",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 8,
      "width" : 45.0,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "height" : 45.0,
      "text-opacity" : 1.0,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "color" : "rgb(51,153,255)",
      "shape" : "ellipse",
      "border-color" : "rgb(145,145,145)",
      "border-width" : 5.0,
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "opacity" : 1.0,
      "source-arrow-shape" : "none",
      "target-arrow-shape" : "triangle",
      "line-style" : "solid",
      "line-color" : "rgb(204,204,204)",
      "text-opacity" : 1.0,
      "target-arrow-color" : "rgb(204,204,204)",
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "width" : 5.0,
      "color" : "rgb(51,153,255)",
      "source-arrow-color" : "rgb(204,204,204)",
      "font-size" : 12,
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]