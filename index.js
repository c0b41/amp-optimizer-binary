const AmpOptimizer = require('@ampproject/toolbox-optimizer');

;(async () => {
    const ampOptimizer = AmpOptimizer.create();

    if(process.argv[2]){

        const output = await ampOptimizer.transformHtml(process.argv[2])
        
        console.log(output)
    }.
})();
