import React from "react";
import Field from "./Field";
import Select from "./Select";
import ImageFile from "./Image";

const Editable = (props) => <Field {...props} />;

Editable.Field = Field;
Editable.Select = Select;
Editable.Image = ImageFile;

export default Editable;
