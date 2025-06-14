import {Router} from 'express'
const router = Router();

import * as videoCtrl from './videos.controller' // videoCtrl = {getVideos, getVideo, createVideo, deleteVideo, updateVideo}

router.get('/videos', videoCtrl.getVideos);

router.get('/videos/:id', videoCtrl.getVideo);

router.post('/videos', videoCtrl.createVideo);

router.delete('/videos/:id', videoCtrl.deleteVideo);

router.put('/videos/:id', videoCtrl.updateVideo);





export default router;
