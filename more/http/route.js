exports.getApiSetting = '/getApiSetting';
//req:-->(header)id_device
//res:-->FormSetting{isRegister: boolean,......}

exports.postCreateUser = '/postCreateUser';
//req:-->(header)id_device, (body)FormRegister{nickname:string, avatar:base64(option),.....}
//res:-->FormRegisterResult{status:int, message: string,.....}

exports.getInfoUserAfterLogin = '/getInfoUserAfterLogin';
//req:-->(header)id_device, (params)
//res:-->FormInfoUser{session:string, nickname:string, address:string, lifes:int, stars:int, wins:int, losts: int, draws:int, unbeatens:int, ...... }
exports.postEnterWaitingRoom = '/postEnterWaitingRoom';
//req: (header)id_device;
//res: FormWaitingResult{status: int, message: string, id_device_guest: string, room: string, ......};



exports.postInfoLogin = '/postInfoLogin';

exports.putInfoLogin = '/putInfoLogin';

exports.deleteInfoLogin = '/deleteInfoLogin';
