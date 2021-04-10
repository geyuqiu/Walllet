# WalletView

```
➜  Walllet git:(main) node -v
v12.22.0
➜  Walllet git:(main) yarn -v
1.22.10
➜  Walllet git:(main) yarn run dev
➜  Walllet git:(main) yarn test
```

switch line 10 with line 13 under `Routing.tsx` to enable feeInput

design decision: 
* module structure: similar to desktop wallet
* against index.ts barrels: https://stackoverflow.com/questions/37564906/what-are-all-the-index-ts-used-for
* use backbutton and logo ark to navigate between `feeInput` and `WalletView`
