    let fruit = [];
    let browser = ["Chrome", "Firefox", "Webkit"];
    console.log(browser[0]);
    console.log(browser.at(-1)); // Start from reverse .at() is an inbuilt function
    console.log(browser.length);        // 3
    console.log(fruit.length);          // 0

    console.log(browser[-1]);     // Undefined

    console.log(browser.at(-4));       // Undefined

    console.log(browser.at(0));     // Chrome



    // Length is different from indexing length start from 1 as normal numbering 
    // Indexing always starts from 0