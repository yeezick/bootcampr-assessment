import { Router } from 'express';
import { getHelloWorld } from '../controllers/my-controller.js';

const router = Router();

// Hello World!
router.get('/hello-world', getHelloWorld)

router.post("/register", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (user)
            return res.status(409).send({ message: "User with given email already exists!" });

        const hashPassword = await bcrypt.hash(req.body.password);

        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created succesfully!" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error!" })
    }
});

export default router;