# Selector Specificity
- Specificity is the order by which the browser decides which CSS >styles will be displayed. A best practice in CSS is to style >elements while using the lowest degree of specificity so that if an >element needs a new style, it is easy to override.


| - | selector |  overrides |
|---|---|---|
| 1 | chaining | id, class, type |
| 2 | id | class, type |
| 3 | class | type |
| 4 | type | - |

<br>

 #### [Back](../readme.md#css-quick-guide)