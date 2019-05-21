describe('A basic test', function () {


    let registerBox
    let emailBox

    beforeEach (() => {
        registerBox = mount(
            RegisterBox, {
                localVue, router,
                mocks: {$http: http},
                propsData: {
                    registration_source: 'register'
                },
                stubs: ['router-link']},
        );
        emailBox = registerBox.find({ ref: 'email' })
    })

    it('should be true', ()=>{


        expect(true).toBe(true)
    });

})
