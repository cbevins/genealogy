# Genealogy Project

This is a sandbox project to explore various aspects of my genealogy combined with web technology.  Primary subprojects are:


## File-Reader Subpackage

The **file-reader** subpackage contains basic functions and scripts to:
- asynchronously read newline-delimited text files from the local file system into a simple Javascript array, and
- write the Javascript array as a 'export const varName = [...]' statement to a Javascript file back onto the local file system.


## GEDCOM Genealogy File Reader and Processor

The **gedcom** subpackage builds upon the **file-reader** by providing a tool for converting GEDCOM text files (as produced by Ancestry.com or RootsMagic) into Javascript files that may be directly imported and queried by Nodejs or browser clients.


## Sylvan Genealogy Classes

The **sylvan** subpackage uses the **gedcom** subpackage to collect all the genealogical data on
people, families, places, and dates into a centralized location for subsequent use in analysis and display.


## Lineage Classes

The **lineage** subpackages uses the Sylvan classes to construct, traverse, analyze, and display direct ancestral lineages from a single root descendant.


## Select Component with Typeahead Search

## Genealogy Diagrams using SVG