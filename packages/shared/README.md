# Shared

The "shared" package in the Sterczące Uszy project contains global data that is shared between both the frontend and design-system packages. 

This data provides essential information about the organization and its various contact points, allowing different parts of the application to access consistent and up-to-date details.

## Usage 🛠️

To use the global data in your code, import it from the "shared" package and access the required information:

```js
import globalData from 'shared/data';

const organizationName = globalData.organizationName;
const nip = globalData.nip;
// Access other properties as needed..
```

By using the globalData object from the "shared" package, you can ensure that the information is consistent and remains centralized across the application.