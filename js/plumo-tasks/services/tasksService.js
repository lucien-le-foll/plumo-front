(function (angular) {
    angular.module('plumo-tasks').factory('TasksService',Factory);
    Factory.$inject = ['HTTPClient'];
    function Factory(HTTPClient) {
        return {
            getTasks : function(){
                return [
                    {
                        name : 'faire la vaisselle',
                        description : 'zienfpznepf'
                    },
                    {
                        name : 'faire la vaisselle',
                        description : 'zienfpznepf'
                    },
                    {
                        name : 'faire la vaisselle',
                        description : 'zienfpznepf'
                    }
                ]
            }
        };
    }
})(angular)