

/*We need five arrays made up of words that have been displayed on the learning screen for this trial:*/

Var oldPositiveWords ["stimPArray[0]","stimPArray[1]","stimPArray[2]"
Var oldNegativeWords ["stimNArray[0]","stimNArray[1]","stimNArray[2]"
Var oldMixedWords ["stimMArray[0]","stimMArray[1]","stimMArray[2]","stimMArray[3]","stimMArray[4]","stimMArray[5]"]
var newPositiveWords ["potato", "carrot", "leek", "parsnip", "squash"]
var newNegativeWords ["melon", "kiwi", "cherry", "dragonfruit", "pomegranette"]

//an array to record which array was called below
var probeCategory

//Two arrays of arrays to use in var probe
var mixedProbeArray = [oldMixedWords, newPositiveWords, newNegativeWords]
var valancedProbeArray = [oldPositiveWords, oldNegativeWords, newPositiveWords, newNegativeWords]

//lots of lovely IFs

var probe = function() {
if cueLabel = "random" then randomly choose from mixedProbeArray (record choice in datafile) and then choose a word randomly from the chosen array to display
probeCategory = random


else randomly choose from valancedProbeArray and then choose a word randomly from the chosen array to display
if



}
*/
