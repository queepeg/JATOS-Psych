

/*We need five arrays made up of words that have been displayed on the learning screen for this trial:

Var oldPositiveWords ["stimPArray[0]","stimPArray[1]","stimPArray[2]"
Var oldNegativeWords ["stimNArray[0]","stimNArray[1]","stimNArray[2]"
Var oldMixedWords ["stimMArray[0]","stimMArray[1]","stimMArray[2]","stimMArray[3]","stimMArray[4]","stimMArray[5]"]
var newPositiveWords ["potato", "carrot", "leek", "parsnip", "squash"]
var newNegativeWords ["melon", "kiwi", "cherry", "dragonfruit", "pomegranette"]

//an array to record which array was called below
var probeCategory

//Two arrays of arrays to use in var probe

var probeArray = [oldPositiveWords, oldNegativeWords, newPositiveWords, newNegativeWords]

//lots of lovely IFs to determine which word to recall as the probe

var probe = function() {
if cueLabel = "random" then randomly DISPLAY a word from "oldMixedWords"
    probeCategory = random

else randomly choose an array from "probeArray" and randomly DISPLAY a word from the chosen array
    probeCategory = probe //this tells us which array was used

//this means that the probe category can now be one of five options that we can track

var completeTrial //this is to compare cue and probe and determine the correct response from user

var correctResponse

if cueLabel = NegRel
    if probeCategory = OldNegativeWords
        completeTrial = "Relevant"
        correctResponse = "Y"

    else if probeCategory = OldPositveWords
        completeTrial = "Irrelevant"
        correctResponse = "N"

    else completeTrial = probeCategory
        correctResponse = "N"

if cueLabel = PosRel
    if probeCategory = OldPositveWords
        completeTrial = "Relevant"
        correctResponse = "Y"

    else if probeCategory = OldNegativeWords
        completeTrial = "Irrelevant"
        correctResponse = "N"

    else completeTrial = probeCategory
        correctResponse = "N"

else completeTrial = "nonCritical"

}
*/
