import { Router } from 'express'
import Task from '../models/Task'

//  Router
const router = Router()

router.get("/", async (req, res) => {
    const task = await Task.find().lean()
    
    res.render('index', { tasks: task });
});

router.post('/tasks/add', async (req, res) => {
    const task = Task(req.body)
    await task.save()
    res.redirect('/')
})

router.get("/about", (req, res) => {
    res.render('about');
});


router.get("/edit/:id", async (req, res) => {
    const task = await Task.findById(req.params.id).lean();
    res.render('edit', { task });
});

router.post('/edit/:id', async (req, res) => {

    const { id } = req.params;

    await Task.findByIdAndUpdate(id, req.body)
    
    res.redirect('/');
})

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;

    await Task.findByIdAndDelete(id);

    res.redirect('/');
})

router.get('/toggleDone/:id', async (req, res) => {
    const { id } = req.params;

    const task = await Task.findById(id);

    task.done = !task.done;

    await task.save;

    res.redirect('/');
})


export default router;