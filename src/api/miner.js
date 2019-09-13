import request from '@/service/index'

/**
 * 获取矿池
 */
export function getLocation () {
    return request({
        url: `api/Miner/Location`,
        method: 'get',
        loading:false,
    })
}
export function getPoolType () {
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
        loading:true,
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
        loading:true,
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
        loading:true,
        data
    })
}