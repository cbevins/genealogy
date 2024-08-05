# Sylvan Classes

Sylvan is a Javascript library for reading and processing genealogy data from GEDCOM files.

Sylvan is a class that contains the collection of People, Families, Places, and Locations, and their associated EvDates.

## Script file **runSylvan.js**

The script **runSylvan.js** demonstrates the basic use of Sylvan with 3 options:

```bash
node runSylvan.js summary
```
displays a simple summary of the number of People, Places, Families, Locations, and review messages for the RootsMagic.ged.


```bash
node runSylvan.js profile
```

displays all the birth, death, parental, spusal, and offspring information for William Lonfgord Bevins.


```bash
node runSylvan.js personList
```

displays a listing of all known Persons (in Javascript synatx).
