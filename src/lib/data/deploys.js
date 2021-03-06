// This file is a mess

const assets = [
  {
    name: 'BAL_95_USDC_5_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0x0395e4a17ff11d36dac9959f2d7c8eca10fe89c9',
  },
  {
    name: 'FARM_USDC_LP',
    type: 'uniswap',
    decimals: 18,
    address: '0x514906FC121c7878424a5C928cad1852CC545892',
  },
  {
    name: 'YFV',
    decimals: 18,
    address: '0x45f24baeef268bb6d63aee5129015d69702bcdfa',
  },
  {
    name: 'YFII',
    decimals: 18,
    address: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
  },
  {
    name: 'WETH',
    decimals: 18,
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
  {
    name: 'LINK',
    decimals: 18,
    address: '0x514910771af9ca656af840dff83e8264ecf986ca',
  },
  {
    name: 'YFI',
    decimals: 18,
    address: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
  },
  {
    name: 'SUSHI',
    decimals: 18,
    address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  {
    name: 'OGN',
    decimals: 18,
    address: '0x8207c1ffc5b6804f6024322ccf34f29c3541ae26',
  },
  {
    name: 'BASED_SUSD_LP',
    type: 'uniswap',
    decimals: 18,
    address: '0xaad22f5543fcdaa694b68f94be177b561836ae57',
  },
  {
    name: 'PASTA_ETH_LP',
    type: 'uniswap',
    decimals: 18,
    address: '0xe92346d9369fe03b735ed9bdeb6bdc2591b8227e',
  },
  {
    name: 'FARM',
    decimals: 18,
    address: '0xa0246c9032bc3a600820415ae600c6388619a14d',
  },
  {
    name: 'USDC',
    decimals: 6,
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  },
  {
    name: 'USDT',
    decimals: 6,
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  },
  {
    name: 'DAI',
    decimals: 18,
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
  {
    name: 'SUSD',
    decimals: 18,
    address: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
  },
  {
    name: 'BASED',
    decimals: 18,
    address: '0x68A118Ef45063051Eac49c7e647CE5Ace48a68a5',
  },
  {
    name: 'PASTA',
    decimals: 18,
    address: '0xE54f9E6Ab80ebc28515aF8b8233c1aeE6506a15E',
  },
  {
    name: 'BAL_80_USDC_20_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0x0126CfA7EC6B6d4A960b5979943c06a9742af55E',
  },
  {
    name: 'BAL_90_SWRV_10_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0xf9F2dF6e0e369145481a32Fcd260E353AA20c1a6',
  },
  {
    name: 'BAL_90_CRV_10_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0xac6bac9Dc3de2c14b420E287De8ECB330d96E492',
  },
  {
    name: 'BAL_90_SUSHI_10_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0xB39Ce7fa5953beBC6697112e88cd11579CBCA579',
  },
  {
    name: 'BAL_90_YFV_10_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0x97cD8E51cd6C888567c6c620188B8Fb264EE8E91',
  },
  {
    name: 'BAL_90_LINK_10_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0x418d3DfcA5099923Cd57e0Bf9Ed1e9994f515152',
  },
  {
    name: 'BAL_90_PYLON_10_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0x1e2dA0aa71155726C5C0E39AF76Ac0c2e8F74bEF',
  },
  {
    name: 'BAL_90_BASED_SUSD_LP_10_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0xf76206115617f090f5a49961a78BCf99BB91cFeE',
  },
  {
    name: 'BAL_90_PASTA_ETH_LP_10_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0xa3e69eBCE417eE0508d6996340126aD60078fCDd',
  },
  {
    name: 'BAL_90_AMPL_ETH_LP_10_FARM',
    type: 'balancer',
    decimals: 18,
    address: '0xdFb341093ea062a74Bd19a222c74Abdcb97C067b',
  },
  {
    name: 'FUSDC_USDC_LP',
    type: 'uniswap',
    decimals: 18,
    address: '0x4161fa43eaa1ac3882aeed12c5fc05249e533e67',
  },
  {
    name: 'FUSDT_USDT_LP',
    type: 'uniswap',
    decimals: 18,
    address: '0x713f62ccf8545ff1df19e5d7ab94887cfaf95677',
  },
  {
    name: 'FDAI_DAI_LP',
    type: 'uniswap',
    decimals: 18,
    address: '0x007e383bf3c3ffa12a5de06a53bab103335eff28',
  },
  {
    name: 'AMPL_ETH_LP',
    type: 'uniswap',
    decimals: 18,
    address: '0xc5be99A02C6857f9Eac67BbCE58DF5572498F40c',
  },
  {
    name: 'SWRV',
    decimals: 18,
    address: '0xB8BAa0e4287890a5F79863aB62b7F175ceCbD433',
  },
  {
    name: 'CRV',
    decimals: 18,
    address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
  },
  {
    name: 'PYLON',
    decimals: 18,
    address: '0xD7B7d3C0bdA57723Fb54ab95Fd8F9EA033AF37f2',
  },
  {
    name: 'AMPL',
    decimals: 9,
    address: '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
  },
  {
    name: 'WBTC',
    decimals: 8,
    address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  },
  {
    name: 'RENBTC',
    decimals: 8,
    address: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  },
];

/**
 * @param {String} name the name of the asset to find
 * @return {Object} the asset object
 */
function assetByName(name) {
  return assets.find((asset) => asset.name === name);
}

/**
 * @param {String} address the address of the asset to find
 * @return {Object} the asset object
 */
function assetByAddress(address) {
  return assets.find(
      (asset) => asset.address.toLowerCase() === address.toLowerCase(),
  );
}

// TODO: refactor and improve
// RATIONALE: want to use assetByName, so need to initialize it first
assets.push({
  name: 'CRVRENWBTC',
  decimals: 18,
  type: 'curve',
  curveInfo: {
    poolAddress: '0x93054188d876f558f4a66b2ef1d97d16edf0895b',
    assets: [
      assetByName('WBTC'),
      assetByName('RENBTC'),
    ],
  },
  address: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
});
assets.push({
  name: 'FDAI',
  type: 'ftoken',
  underlyingAsset: assetByName('DAI'),
  decimals: 18,
  address: '0xe85c8581e60d7cd32bbfd86303d2a4fa6a951dac',
});
assets.push({
  name: 'FUSDC',
  type: 'ftoken',
  underlyingAsset: assetByName('USDC'),
  decimals: 6,
  address: '0xc3f7ffb5d5869b3ade9448d094d81b0521e8326f',
});
assets.push({
  name: 'FUSDT',
  type: 'ftoken',
  underlyingAsset: assetByName('USDT'),
  decimals: 6,
  address: '0xc7ee21406bb581e741fbb8b21f213188433d9f2f',
});
assets.push({
  name: 'FWBTC',
  type: 'ftoken',
  underlyingAsset: assetByName('WBTC'),
  decimals: 8,
  address: '0xc07EB91961662D275E2D285BdC21885A4Db136B0',
});
assets.push({
  name: 'FRENBTC',
  type: 'ftoken',
  underlyingAsset: assetByName('RENBTC'),
  decimals: 18,
  address: '0xfBe122D0ba3c75e1F7C80bd27613c9f35B81FEeC',
});
assets.push({
  name: 'FCRVRENWBTC',
  type: 'ftoken',
  underlyingAsset: assetByName('CRVRENWBTC'),
  decimals: 18,
  address: '0x192E9d29D43db385063799BC239E772c3b6888F3',
});


const weekOnePools = [
  {
    asset: assetByName('FDAI'),
    address: '0xF9E5f9024c2f3f2908A1d0e7272861a767C9484b',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FUSDC'),
    address: '0xE1f9A3EE001a2EcC906E8de637DBf20BB2d44633',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FUSDT'),
    address: '0x5bd997039FFF16F653EF15D1428F2C791519f58d',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BAL_95_USDC_5_FARM'),
    address: '0x6f8A975758436A5Ec38d2f9d2336504430465517',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FARM_USDC_LP'),
    address: '0x99b0d6641A63Ce173E6EB063b3d3AED9A35Cf9bf',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('YFV'),
    address: '0x3631A32c959C5c52BC90AB5b7D212a8D00321918',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('YFII'),
    address: '0xC97DDAa8091aBaF79A4910b094830CCE5cDd78f4',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('WETH'),
    address: '0xE604Fd5b1317BABd0cF2c72F7F5f2AD8c00Adbe1',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('LINK'),
    address: '0xa112c2354d27c2Fb3370cc5d027B28987117a268',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('YFI'),
    address: '0x84646F736795a8bC22Ab34E05c8982CD058328C7',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('SUSHI'),
    address: '0x4938960C507A4d7094C53A8cDdCF925835393B8f',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('OGN'),
    address: '0xF71042C88458ff1702c3870f62F4c764712Cc9F0',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BASED_SUSD_LP'),
    address: '0xb3b56c7BDc87F9DeB7972cD8b5c09329ce421F89',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('PASTA_ETH_LP'),
    address: '0xC6f39CFf6797baC5e29275177b6E8e315cF87D95',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FARM'),
    address: '0xae024F29C26D6f71Ec71658B1980189956B0546D',
    rewardAsset: assetByName('FARM'),
  },
];

const weekTwoPools = [
  {
    asset: assetByName('BAL_80_USDC_20_FARM'),
    address: '0x346523a81f16030110e6c858ee0e11f156840bd1',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FARM_USDC_LP'),
    address: '0x99b0d6641A63Ce173E6EB063b3d3AED9A35Cf9bf',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FUSDC_USDC_LP'),
    address: '0x43286F57cf5981a5db56828dF91a46CfAb983E58',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FUSDT_USDT_LP'),
    address: '0x316De40F36da4C54AFf11C1D83081555Cca41270',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FDAI_DAI_LP'),
    address: '0xB492fAEdA6c9FFb9B9854a58F28d5333Ff7a11bc',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FDAI'),
    address: '0xF9E5f9024c2f3f2908A1d0e7272861a767C9484b',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FUSDC'),
    address: '0xE1f9A3EE001a2EcC906E8de637DBf20BB2d44633',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FUSDT'),
    address: '0x5bd997039FFF16F653EF15D1428F2C791519f58d',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FARM'),
    address: '0x59258F4e15A5fC74A7284055A8094F58108dbD4f',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BAL_90_SWRV_10_FARM'),
    address: '0x44356324864A30216e89193bc8b0F6309227d690',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BAL_90_CRV_10_FARM'),
    address: '0x45A760B3E83FF8C107C4df955b1483De0982F393',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BAL_90_SUSHI_10_FARM'),
    address: '0x26582BeA67B30AF166b7FCD3424Ba1E0638Ab136',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BAL_90_YFV_10_FARM'),
    address: '0x158edB94D0bfC093952fB3009DeeED613042907c',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BAL_90_LINK_10_FARM'),
    address: '0x19f8cE19c9730A1d0db5149e65E48c2f0DAa9919',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BAL_90_PYLON_10_FARM'),
    address: '0x2f97D9f870a773186CB01742Ff298777BBF6f244',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BAL_90_BASED_SUSD_LP_10_FARM'),
    address: '0xf465573288D9D89C6E89b1bc3BC9ce2b997E77dF',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BAL_90_PASTA_ETH_LP_10_FARM'),
    address: '0xB4D1D6150dAc0D1A994AfB2A196adadBE639FF95',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('BAL_90_AMPL_ETH_LP_10_FARM'),
    address: '0x7AF4458D3aBD61C3fd187Bb9f1Bbf917Cd4be9B8',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FWBTC'),
    address: '0x6291eCe696CB6682a9bb1d42fca4160771b1D7CC',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FRENBTC'),
    address: '0xCFE1103863F9e7Cf3452Ca8932Eef44d314bf9C5',
    rewardAsset: assetByName('FARM'),
  },
  {
    asset: assetByName('FCRVRENWBTC'),
    address: '0x5365A2C47b90EE8C9317faC20edC3ce7037384FB',
    rewardAsset: assetByName('FARM'),
  },
];


/**
 * @param {Set} setA
 * @param {Set} setB
 * @return {Set} union
 */
function union(setA, setB) {
  const has = [];
  setA.forEach((val) => has.push(val.address));

  const _union = new Set(setA);

  for (const elem of setB) {
    // if B's elem not in A, add to union
    if (!has.find((e) => e === elem.address)) _union.add(elem);
  }
  return _union;
}

/**
 * @param {Set} setA
 * @param {Set} setB
 * @return {Set} difference
 */
function difference(setA, setB) {
  const has = [];
  setB.forEach((val) => has.push(val.address));

  const _difference = new Set(setA);
  for (const elem of setA) {
    // if A's elem in B, remove from difference
    if (has.find((e) => e === elem.address)) _difference.delete(elem);
  }
  return _difference;
}


// SETUP

const periods = [weekOnePools, weekTwoPools];

// Get a deduped set of all past poos
let allPastPools = new Set();
const sets = periods.map((period) => new Set(period));
sets.forEach((set) => allPastPools = union(allPastPools, set));

// Inactive pools are in all past pools, but not the most recent week
const inactivePools = difference(allPastPools, sets[sets.length - 1]);
const activePools = sets[sets.length - 1];

/**
 * @param {String} address
 * @return {bool} isActive
 */
function isAddressActive(address) {
  for (const value of activePools) {
    if (value.address === address) {
      return true;
    }
  }
  return false;
}

/**
 * @param {Object} pool
 * @return {bool} isActive
 */
function isActive(pool) {
  return isAddressActive(pool.address);
}

// prevent modification
assets.forEach(Object.freeze);
Object.freeze(periods);
periods.forEach((week) => {
  week.forEach(Object.freeze);
  Object.freeze(week);
});
Object.freeze(allPastPools);

export default {
  activePools: Object.freeze([...activePools]),
  allPastPools: [...allPastPools],
  assets,
  assetByAddress,
  assetByName,
  inactivePools: [...inactivePools],
  isAddressActive,
  isActive,
  periods,
  weekOnePools,
  weekTwoPools,
};
