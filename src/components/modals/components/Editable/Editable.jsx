import React from "react";
import Field from "./Field";
import Select from "./Select";

const Editable = (props) => <Field {...props}/>;

Editable.Field = Field;
Editable.Select = Select;

export default Editable;