# WalletView

```
➜  Walllet git:(main) node -v
v12.22.0
➜  Walllet git:(main) yarn -v
1.22.10
➜  Walllet git:(main) yarn run dev
➜  Walllet git:(main) yarn test
➜  Walllet git:(main) yarn run build
➜  Walllet git:(main) yarn test:e2e
```

switch line 10 with line 13 under `Routing.tsx` to enable feeInput

design decision: 
* module structure: similar to desktop wallet without barrels and theme
* use backbutton and logo ark to navigate between `feeInput` and `WalletView`
