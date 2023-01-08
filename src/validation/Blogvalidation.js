import joi from 'joi'
const AuthValidation1 = (req, res, next) =>{
    const singUpSchema = joi.object().keys({
        title:joi.string().required().messages({
            "any.required":"title required",
        }),
        description:joi.string().required().min(6).messages({
            "any.required":"description required required",
        }),
        content:joi.string().required().messages({
          "any.required":"content required",
      }),
      image:joi.string().required().messages({
        "any.required":"image required",
    }),

    })

    const value = singUpSchema.validate(req.body);
    if(value.error){
        return res.status(400).json({
            message:value.error.details[0].message,
        })
    }else {
        return next()
    }
}

export default AuthValidation1;