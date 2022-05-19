import React from "react";
import Field from "./Field";
import Select from "./Select";
import NestedSelect from "./NestedSelect";
import ImageFile from "./Image";
import CreatableSelect from "./CreatableSelect";

const Editable = (props) => <Field {...props} />;

Editable.Field = Field;
Editable.Select = Select;
Editable.NestedSelect = NestedSelect;
Editable.Image = ImageFile;
Editable.CreatableSelect = CreatableSelect;

export default Editable;
