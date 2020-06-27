module.exports = {
  "resourceType" : "StructureDefinition",
  "id" : "HumanName",
  "meta" : {
    "lastUpdated" : "2019-11-01T09:29:23.356+11:00"
  },
  "text" : {
    "status" : "generated",
    "div" : "<div>!-- Snipped for Brevity --></div>"
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
    "valueCode" : "normative"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
    "valueCode" : "4.0.0"
  }],
  "url" : "http://hl7.org/fhir/StructureDefinition/HumanName",
  "version" : "4.0.1",
  "name" : "HumanName",
  "status" : "active",
  "date" : "2019-11-01T09:29:23+11:00",
  "publisher" : "HL7 FHIR Standard",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "http://hl7.org/fhir"
    }]
  }],
  "description" : "Base StructureDefinition for HumanName Type: A human's name with the ability to identify parts and usage.",
  "purpose" : "Need to be able to record names, along with notes about their use.",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "type" : "HumanName",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Element",
  "derivation" : "specialization",
  "snapshot" : {
    "element" : [{
      "id" : "HumanName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
        "valueCode" : "normative"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
        "valueCode" : "4.0.0"
      }],
      "path" : "HumanName",
      "short" : "Name of a human - parts and usage",
      "definition" : "A human's name with the ability to identify parts and usage.",
      "comment" : "Names may be changed, or repudiated, or people may have different names in different contexts. Names may be divided into parts of different type that have variable significance depending on context, though the division into parts does not always matter. With personal names, the different parts might or might not be imbued with some implicit meaning; various cultures associate different importance with the name parts and the degree to which systems must care about name parts around the world varies widely.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "HumanName",
        "min" : 0,
        "max" : "*"
      },
      "condition" : ["ele-1"],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      },
      {
        "identity" : "v2",
        "map" : "XPN"
      },
      {
        "identity" : "rim",
        "map" : "EN (actually, PN)"
      },
      {
        "identity" : "servd",
        "map" : "ProviderName"
      }]
    },
    {
      "id" : "HumanName.id",
      "path" : "HumanName.id",
      "representation" : ["xmlAttr"],
      "short" : "Unique id for inter-element referencing",
      "definition" : "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Element.id",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
          "valueUrl" : "string"
        }],
        "code" : "http://hl7.org/fhirpath/System.String"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      }]
    },
    {
      "id" : "HumanName.extension",
      "path" : "HumanName.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "description" : "Extensions are always sliced by (at least) url",
        "rules" : "open"
      },
      "short" : "Additional content defined by implementations",
      "definition" : "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
      "comment" : "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      "alias" : ["extensions",
      "user content"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "Element.extension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      },
      {
        "key" : "ext-1",
        "severity" : "error",
        "human" : "Must have either extensions or value[x], not both",
        "expression" : "extension.exists() != value.exists()",
        "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])",
        "source" : "http://hl7.org/fhir/StructureDefinition/Extension"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "mapping" : [{
        "identity" : "rim",
        "map" : "n/a"
      }]
    },
    {
      "id" : "HumanName.use",
      "path" : "HumanName.use",
      "short" : "usual | official | temp | nickname | anonymous | old | maiden",
      "definition" : "Identifies the purpose for this name.",
      "comment" : "Applications can assume that a name is current unless it explicitly says that it is temporary or old.",
      "requirements" : "Allows the appropriate name for a particular context of use to be selected from among a set of names.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "HumanName.use",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "code"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : true,
      "isModifierReason" : "This is labeled as \"Is Modifier\" because applications should not mistake a temporary or old name etc.for a current/permanent one",
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "NameUse"
        }],
        "strength" : "required",
        "description" : "The use of a human name.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/name-use|4.0.1"
      },
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN.7, but often indicated by which field contains the name"
      },
      {
        "identity" : "rim",
        "map" : "unique(./use)"
      },
      {
        "identity" : "servd",
        "map" : "./NamePurpose"
      }]
    },
    {
      "id" : "HumanName.text",
      "path" : "HumanName.text",
      "short" : "Text representation of the full name",
      "definition" : "Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts.",
      "comment" : "Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.",
      "requirements" : "A renderable, unencoded form.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "HumanName.text",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "string"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "implied by XPN.11"
      },
      {
        "identity" : "rim",
        "map" : "./formatted"
      }]
    },
    {
      "id" : "HumanName.family",
      "path" : "HumanName.family",
      "short" : "Family name (often called 'Surname')",
      "definition" : "The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.",
      "comment" : "Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).",
      "alias" : ["surname"],
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "HumanName.family",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "string"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN.1/FN.1"
      },
      {
        "identity" : "rim",
        "map" : "./part[partType = FAM]"
      },
      {
        "identity" : "servd",
        "map" : "./FamilyName"
      }]
    },
    {
      "id" : "HumanName.given",
      "path" : "HumanName.given",
      "short" : "Given names (not always 'first'). Includes middle names",
      "definition" : "Given name.",
      "comment" : "If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called \"first name\" since given names do not always come first.",
      "alias" : ["first name",
      "middle name"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "HumanName.given",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "string"
      }],
      "orderMeaning" : "Given Names appear in the correct order for presenting the name",
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN.2 + XPN.3"
      },
      {
        "identity" : "rim",
        "map" : "./part[partType = GIV]"
      },
      {
        "identity" : "servd",
        "map" : "./GivenNames"
      }]
    },
    {
      "id" : "HumanName.prefix",
      "path" : "HumanName.prefix",
      "short" : "Parts that come before the name",
      "definition" : "Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "HumanName.prefix",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "string"
      }],
      "orderMeaning" : "Prefixes appear in the correct order for presenting the name",
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN.5"
      },
      {
        "identity" : "rim",
        "map" : "./part[partType = PFX]"
      },
      {
        "identity" : "servd",
        "map" : "./TitleCode"
      }]
    },
    {
      "id" : "HumanName.suffix",
      "path" : "HumanName.suffix",
      "short" : "Parts that come after the name",
      "definition" : "Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "HumanName.suffix",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "string"
      }],
      "orderMeaning" : "Suffixes appear in the correct order for presenting the name",
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN/4"
      },
      {
        "identity" : "rim",
        "map" : "./part[partType = SFX]"
      }]
    },
    {
      "id" : "HumanName.period",
      "path" : "HumanName.period",
      "short" : "Time period when name was/is in use",
      "definition" : "Indicates the period of time when this name was valid for the named person.",
      "requirements" : "Allows names to be placed in historical context.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "HumanName.period",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "Period"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div",
        "source" : "http://hl7.org/fhir/StructureDefinition/Element"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN.13 + XPN.14"
      },
      {
        "identity" : "rim",
        "map" : "./usablePeriod[type=\"IVL<TS>\"]"
      },
      {
        "identity" : "servd",
        "map" : "./StartDate and ./EndDate"
      }]
    }]
  },
  "differential" : {
    "element" : [{
      "id" : "HumanName",
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
        "valueCode" : "normative"
      },
      {
        "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
        "valueCode" : "4.0.0"
      }],
      "path" : "HumanName",
      "short" : "Name of a human - parts and usage",
      "definition" : "A human's name with the ability to identify parts and usage.",
      "comment" : "Names may be changed, or repudiated, or people may have different names in different contexts. Names may be divided into parts of different type that have variable significance depending on context, though the division into parts does not always matter. With personal names, the different parts might or might not be imbued with some implicit meaning; various cultures associate different importance with the name parts and the degree to which systems must care about name parts around the world varies widely.",
      "min" : 0,
      "max" : "*",
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN"
      },
      {
        "identity" : "rim",
        "map" : "EN (actually, PN)"
      },
      {
        "identity" : "servd",
        "map" : "ProviderName"
      }]
    },
    {
      "id" : "HumanName.use",
      "path" : "HumanName.use",
      "short" : "usual | official | temp | nickname | anonymous | old | maiden",
      "definition" : "Identifies the purpose for this name.",
      "comment" : "Applications can assume that a name is current unless it explicitly says that it is temporary or old.",
      "requirements" : "Allows the appropriate name for a particular context of use to be selected from among a set of names.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "code"
      }],
      "isModifier" : true,
      "isModifierReason" : "This is labeled as \"Is Modifier\" because applications should not mistake a temporary or old name etc.for a current/permanent one",
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "NameUse"
        }],
        "strength" : "required",
        "description" : "The use of a human name.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/name-use|4.0.1"
      },
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN.7, but often indicated by which field contains the name"
      },
      {
        "identity" : "rim",
        "map" : "unique(./use)"
      },
      {
        "identity" : "servd",
        "map" : "./NamePurpose"
      }]
    },
    {
      "id" : "HumanName.text",
      "path" : "HumanName.text",
      "short" : "Text representation of the full name",
      "definition" : "Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts.",
      "comment" : "Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.",
      "requirements" : "A renderable, unencoded form.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }],
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "implied by XPN.11"
      },
      {
        "identity" : "rim",
        "map" : "./formatted"
      }]
    },
    {
      "id" : "HumanName.family",
      "path" : "HumanName.family",
      "short" : "Family name (often called 'Surname')",
      "definition" : "The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.",
      "comment" : "Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).",
      "alias" : ["surname"],
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }],
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN.1/FN.1"
      },
      {
        "identity" : "rim",
        "map" : "./part[partType = FAM]"
      },
      {
        "identity" : "servd",
        "map" : "./FamilyName"
      }]
    },
    {
      "id" : "HumanName.given",
      "path" : "HumanName.given",
      "short" : "Given names (not always 'first'). Includes middle names",
      "definition" : "Given name.",
      "comment" : "If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called \"first name\" since given names do not always come first.",
      "alias" : ["first name",
      "middle name"],
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "string"
      }],
      "orderMeaning" : "Given Names appear in the correct order for presenting the name",
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN.2 + XPN.3"
      },
      {
        "identity" : "rim",
        "map" : "./part[partType = GIV]"
      },
      {
        "identity" : "servd",
        "map" : "./GivenNames"
      }]
    },
    {
      "id" : "HumanName.prefix",
      "path" : "HumanName.prefix",
      "short" : "Parts that come before the name",
      "definition" : "Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "string"
      }],
      "orderMeaning" : "Prefixes appear in the correct order for presenting the name",
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN.5"
      },
      {
        "identity" : "rim",
        "map" : "./part[partType = PFX]"
      },
      {
        "identity" : "servd",
        "map" : "./TitleCode"
      }]
    },
    {
      "id" : "HumanName.suffix",
      "path" : "HumanName.suffix",
      "short" : "Parts that come after the name",
      "definition" : "Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "string"
      }],
      "orderMeaning" : "Suffixes appear in the correct order for presenting the name",
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN/4"
      },
      {
        "identity" : "rim",
        "map" : "./part[partType = SFX]"
      }]
    },
    {
      "id" : "HumanName.period",
      "path" : "HumanName.period",
      "short" : "Time period when name was/is in use",
      "definition" : "Indicates the period of time when this name was valid for the named person.",
      "requirements" : "Allows names to be placed in historical context.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Period"
      }],
      "isSummary" : true,
      "mapping" : [{
        "identity" : "v2",
        "map" : "XPN.13 + XPN.14"
      },
      {
        "identity" : "rim",
        "map" : "./usablePeriod[type=\"IVL<TS>\"]"
      },
      {
        "identity" : "servd",
        "map" : "./StartDate and ./EndDate"
      }]
    }]
  }
}
