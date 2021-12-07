import React from "react";
import Field from "./Field";
import Select from "./Select";
import NestedSelect from "./NestedSelect";
import ImageFile from "./Image";

const Editable = (props) => <Field {...props} />;

Editable.Field = Field;
Editable.Select = Select;
Editable.NestedSelect = NestedSelect;
Editable.Image = ImageFile;

export default Editable;
