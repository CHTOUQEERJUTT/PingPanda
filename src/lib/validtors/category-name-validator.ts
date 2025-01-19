import {z} from "zod"

export const CATEGORY_NAME_VALIDATOR = z
.string()
.min(1,"Must Contain atleast one char")
.regex(
    /^[a-zA-Z0-9-]+$/,
    "Category name can only contain letters, numbers or hypens."
)