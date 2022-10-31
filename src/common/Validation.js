import * as yup from 'yup';

//  Validate the data you receives
export const Validator = yup.object().shape({
    title: yup.string().required().min(5),
    description: yup.string().required().min(15).max(150),
    image: yup.array().of(yup.string()),
    createdOn: yup.date().default(function () {
        return new Date();
    }),
})

