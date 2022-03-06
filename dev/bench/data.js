window.BENCHMARK_DATA = {
  lastUpdate: 1646579973095,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'antoniomusolino007@gmail.com',
            name: 'antoniomuso',
            username: 'antoniomuso',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: 'f783e9537f35cd1cecfd86e07cc24b124896bd76',
          message: 'feat(napi): allow empty enums',
          timestamp: '2022-03-06T23:12:31+08:00',
          tree_id: '2924dfb6f82faa1c7bca5487278a899c9864db6d',
          url: 'https://github.com/napi-rs/napi-rs/commit/f783e9537f35cd1cecfd86e07cc24b124896bd76',
        },
        date: 1646579971874,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 47461345,
            range: '±0.69%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 622396725,
            range: '±0.7%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 15736174,
            range: '±0.98%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 615154690,
            range: '±0.73%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 336868,
            range: '±10.14%',
            unit: 'ops/sec',
            extra: '63 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1517102,
            range: '±7.91%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 31156,
            range: '±0.49%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 6194,
            range: '±0.24%',
            unit: 'ops/sec',
            extra: '94 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 6132,
            range: '±0.14%',
            unit: 'ops/sec',
            extra: '94 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 13991,
            range: '±0.44%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 8486,
            range: '±0.17%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 10074,
            range: '±0.14%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 355067,
            range: '±5.73%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 312298,
            range: '±5.53%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 314285,
            range: '±5.37%',
            unit: 'ops/sec',
            extra: '73 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 290808,
            range: '±5.54%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 28670,
            range: '±1.83%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 337,
            range: '±3.42%',
            unit: 'ops/sec',
            extra: '63 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 22241,
            range: '±2.46%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1792,
            range: '±2.02%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'Query#query * 1',
            value: 24396,
            range: '±2.2%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
        ],
      },
    ],
  },
}