export let recordDefault = 50;

export let searchOptions: string[] = ["None","Rohs","InStock","RohsAndInStock"];

export let postMouserInput =
{
    "SearchByKeywordRequest":
    {
        "keyword": "string",
        "records": recordDefault,
        "startingRecord": 0,
        "searchOptions": "None",
        "searchWithYourSignUpLanguage": "string"
    }
};

