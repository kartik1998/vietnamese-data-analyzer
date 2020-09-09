## vietnam-data-analyzer
![](https://img.shields.io/badge/npm-v1.0.0-green)
![](https://img.shields.io/badge/edit--distance-string--matching-orange) ![](https://img.shields.io/badge/vietnam-names-blue)

**Comparison of vietnamese names and Addresses/Provinces with the added functionality of using editDistance for comparison.**

#### Use Case 

**Name Comparison :** 

```
const { compareNames } = require('vietnamese-data-analyzer')

const name1 = 'Thạch Vương'
const name2 = 'Tăng Vương'

const isSame = compareNames(name1,name2); // When you don't want to use edit distance.
const isSame = compareNames(name1,name2,maxEditDistance); //Setting an upper Limit for edit Distance 

```

**Address Comparison :**

```
const { compareAddresses } = require('vietnamese-data-analyzer')

const address1 = 'Xóm Biu Hương Nhượng,'
const address2 = 'HẠNH SƠN, VĂN CHẤN,'

// Commas aren't considered during comparison

const isSame = compareAddresses(address1,address2); // When you don't want to use edit distance.
const isSame = compareAddresses(address1,address2,maxEditDistance); //Setting an upper Limit for edit Distance 

```





