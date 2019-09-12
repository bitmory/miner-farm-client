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
        loading:false,
        params:params?params:{}
    })
}