function SumCtrl ($scope){


$scope.total=0;
$scope.numbers=[{amount:0}];

$scope.addNumber = function(value1,value2){

$scope.numbers.push({amount: parseInt(value1)});
$scope.numbers.push({amount: parseInt(value2)});

return $scope.sumed;
};
$scope.getTotal= function(){
var num1=$scope.numbers[1];
var num1=$scope.numbers[2];

var total=num1+num2;

return total;
};



}