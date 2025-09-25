import { Joi, Segments, celebrate } from 'celebrate';

const validateUserCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    cpf: Joi.string().required(),
  }),
});

const validateUserUpdate = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required().uuid(),
  }),
  [Segments.BODY]: Joi.object().keys({
    cpf: Joi.string().required(),
  }),
});

export { validateUserCreate, validateUserUpdate };
