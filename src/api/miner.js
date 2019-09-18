import request from '@/service/index'

/**
 * 获取矿池地点
 */
export function getLocation () {
    return request({
        url: `api/Miner/Location`,
        method: 'get',
        loading:false,
    })
}

/**
 * 获取矿池类型
 */
export function getPoolTypes () {
    return request({
        url: `api/Miner/PoolType`,
        method: 'get',
        loading:false,
    })
}

/**
 * 获取矿池列表
 * @param params
 * @constructor
 */
export function MiningPool (params) {
    return request({
        url: `api/Miner/MiningPool`,
        method: 'get',
        loading:false,
        params:params?params:{}
    })
}

/**
 * 添加矿池
 * @param data
*/
export function addMiningPool (data) {
    return request({
        url: `api/Miner/MiningPool/Add`,
        method: 'post',
        loading:false,
        data
    })
}

/**
 * 编辑矿池
 * @param data
 * @param id
 */
export function editMiningPool (data,id) {
    return request({
        url: `api/Miner/MiningPool/Edit?poolid=`+id,
        method: 'post',
        loading:false,
        data
    })
}

/**
 * 删除矿池
 * @param id
 */
export function deleteMiningPool (id) {
    return request({
        url: `api/Miner/MiningPool/Delete?poolid=`+id,
        method: 'post',
        loading:false
    })
}

/**
 * 获取矿机详情
 * @param id
 */
export function workerDetail (id) {
    return request({
        url: `api/Miner/worker?workerid=`+id,
        method: 'get',
        loading:false
    })
}