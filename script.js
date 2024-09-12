const avanca = documento.querSelector('.btn-proximo');

avanca.ForEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querSelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttrribute('data-proximo');

        atual.classlist.remove('ativo');
        document.getElementById(proximoPasso).classlist.add('ativo')
    })
})

