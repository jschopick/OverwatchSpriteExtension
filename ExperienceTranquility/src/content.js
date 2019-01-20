// Zenyatta GIF
let img = document.createElement("img");
img.id = "Zenyatta";
img.src = chrome.extension.getURL("images/Zenyatta.gif");
img.style.position = "fixed";
img.style.right = 0;
img.style.bottom = "20px";
img.style.zIndex = 1000;
document.body.appendChild(img);
console.log("Zenyatta is here!");

let curr = Math.floor(Math.random() * 64);
let prev = curr;

window.addEventListener('load', function load(event) {
    // Randomly pick a phrase on-click
    document.getElementById('Zenyatta').onclick = function() {
        // Display Message
        let prevID = "hiddenMessage" + prev;
        let currID = "hiddenMessage" + curr;
        if(document.getElementById(prevID).style.display != 'block') {
            document.getElementById(currID).style.display = 'block';
            setTimeout(function(){ document.getElementById(currID).style.display = "none"; }, 6000);

            // Play Audio Recording
            document.getElementById("audio" + curr).play();
            prev = curr;
            while(prev == curr) {
                curr = Math.floor(Math.random() * 64);
            }
        }
    };
});

// Format Message CSS
let msg = new Array(64);
let i = 0;
while(i < msg.length) {
    msg[i] = document.createElement("img");
    msg[i].id = "hiddenMessage" + i;
    msg[i].style.display = "none";
    msg[i].style.position = "fixed";
    msg[i].style.right = "115px";
    msg[i].style.bottom = "270px";
    msg[i].style.height = "70px";
    msg[i].style.zIndex = 1000;
    document.body.appendChild(msg[i]);
    i++;
}

// Format audio files
let audio = new Array(64);
i = 0;
while(i < audio.length) {
    audio[i] = document.createElement("audio");
    audio[i].id = "audio" + i;
    document.body.appendChild(audio[i]);
    i++;
}

// Message Sources
msg[0].src = chrome.extension.getURL("speech-bubbles/I_dreamt_I_was_a_butterfly.png");
msg[1].src = chrome.extension.getURL("speech-bubbles/a_chance_to_focus.png");
msg[2].src = chrome.extension.getURL("speech-bubbles/a_closed_mind_is_already_defeated.png");
msg[3].src = chrome.extension.getURL("speech-bubbles/a_disciplined_mind_is_your_most_dependable_ally.png");
msg[4].src = chrome.extension.getURL("speech-bubbles/a_lesson_in_humility.png");
msg[5].src = chrome.extension.getURL("speech-bubbles/a_warriors_greatest_weapon_is_patience.png");
msg[6].src = chrome.extension.getURL("speech-bubbles/adversity_is_an_opportunity_for_change.png");
msg[7].src = chrome.extension.getURL("speech-bubbles/all_knowing.png");
msg[8].src = chrome.extension.getURL("speech-bubbles/always_strive_for_improvement.png");
msg[9].src = chrome.extension.getURL("speech-bubbles/and_I_will_watch_your_back_in_turn.png");
msg[10].src = chrome.extension.getURL("speech-bubbles/bask_in_the_shadow_of_doubt.png");
msg[11].src = chrome.extension.getURL("speech-bubbles/be_one_with_the_universe.png");
msg[12].src = chrome.extension.getURL("speech-bubbles/consider_only_victory_make_defeat_an_impossibility_in_your_mind.png");
msg[13].src = chrome.extension.getURL("speech-bubbles/do_I_think_does_a_submarine_swim.png");
msg[14].src = chrome.extension.getURL("speech-bubbles/do_not_be_discouraged_everyone_begins_in_ignorance.png");
msg[15].src = chrome.extension.getURL("speech-bubbles/eager_to_learn.png");
msg[16].src = chrome.extension.getURL("speech-bubbles/embrace_tranquility.png");
msg[17].src = chrome.extension.getURL("speech-bubbles/every_rooster_crows_in_its_own_pen.png");
msg[18].src = chrome.extension.getURL("speech-bubbles/excellence_is_its_own_reward.png");
msg[19].src = chrome.extension.getURL("speech-bubbles/experience_tranquility.png");
msg[20].src = chrome.extension.getURL("speech-bubbles/falter_now_and_we_will_succumb_to_defeat.png");
msg[21].src = chrome.extension.getURL("speech-bubbles/free_your_mind.png");
msg[22].src = chrome.extension.getURL("speech-bubbles/gaze_into_the_iris.png");
msg[23].src = chrome.extension.getURL("speech-bubbles/hatred_is_not_strategy.png");
msg[24].src = chrome.extension.getURL("speech-bubbles/how_disappointing.png");
msg[25].src = chrome.extension.getURL("speech-bubbles/I_think_therefore_I_am.png");
msg[26].src = chrome.extension.getURL("speech-bubbles/I_welcome_adversity.png");
msg[27].src = chrome.extension.getURL("speech-bubbles/if_you_do_not_bend_you_break.png");
msg[28].src = chrome.extension.getURL("speech-bubbles/impressive.png");
msg[29].src = chrome.extension.getURL("speech-bubbles/in_anger_you_defeat_only_yourself.png");
msg[30].src = chrome.extension.getURL("speech-bubbles/it_is_good_to_return_but_am_I_still_welcome_here.png");
msg[31].src = chrome.extension.getURL("speech-bubbles/justice_is_defined_by_the_hand_that_claims_it.png");
msg[32].src = chrome.extension.getURL("speech-bubbles/life_is_more_than_a_series_of_ones_and_zeroes.png");
msg[33].src = chrome.extension.getURL("speech-bubbles/move_too_quickly_and_you_overlook_much.png");
msg[34].src = chrome.extension.getURL("speech-bubbles/my_spirit_is_strong.png");
msg[35].src = chrome.extension.getURL("speech-bubbles/no_snowflake_ever_falls_in_the_wrong_place.png");
msg[36].src = chrome.extension.getURL("speech-bubbles/one_cannot_survive_on_strength_alone.png");
msg[37].src = chrome.extension.getURL("speech-bubbles/open_your_mind.png");
msg[38].src = chrome.extension.getURL("speech-bubbles/overconfidence_is_a_flimsy_shield.png");
msg[39].src = chrome.extension.getURL("speech-bubbles/pain_is_an_excellent_teacher.png");
msg[40].src = chrome.extension.getURL("speech-bubbles/peace_and_blessings_be_upon_you_all.png");
msg[41].src = chrome.extension.getURL("speech-bubbles/peace_be_upon_you.png");
msg[42].src = chrome.extension.getURL("speech-bubbles/repetition_is_the_path_to_mastery.png");
msg[43].src = chrome.extension.getURL("speech-bubbles/revenge_is_not_justice.png");
msg[44].src = chrome.extension.getURL("speech-bubbles/tell_me_your_thoughts_my_friend.png");
msg[45].src = chrome.extension.getURL("speech-bubbles/the_outcome_is_not_preordained.png");
msg[46].src = chrome.extension.getURL("speech-bubbles/there_is_chaos_within_you.png");
msg[47].src = chrome.extension.getURL("speech-bubbles/time_grows_short_attack.png");
msg[48].src = chrome.extension.getURL("speech-bubbles/time_is_an_illusion.png");
msg[49].src = chrome.extension.getURL("speech-bubbles/to_hold_a_grudge_is_unhealthy_for_you.png");
msg[50].src = chrome.extension.getURL("speech-bubbles/true_self_is_without_form.png");
msg[51].src = chrome.extension.getURL("speech-bubbles/victory_is_within_our_grasp_hold_strong.png");
msg[52].src = chrome.extension.getURL("speech-bubbles/walk_in_harmony.png");
msg[53].src = chrome.extension.getURL("speech-bubbles/we_are_in_harmony.png");
msg[54].src = chrome.extension.getURL("speech-bubbles/we_walk_in_harmony_my_student.png");
msg[55].src = chrome.extension.getURL("speech-bubbles/what_a_fascinating_place.png");
msg[56].src = chrome.extension.getURL("speech-bubbles/wonderful.png");
msg[57].src = chrome.extension.getURL("speech-bubbles/you_are_your_own_worst_enemy.png");
msg[58].src = chrome.extension.getURL("speech-bubbles/you_have_much_to_learn.png");
msg[59].src = chrome.extension.getURL("speech-bubbles/you_must_learn_from_your_mistakes.png");
msg[60].src = chrome.extension.getURL("speech-bubbles/you_refuse_to_learn.png");
msg[61].src = chrome.extension.getURL("speech-bubbles/your_weakness_is_revealed.png");
msg[62].src = chrome.extension.getURL("speech-bubbles/Zenyatta_is_here.png");
msg[63].src = chrome.extension.getURL("speech-bubbles/experience_festivity.png");

// Audio Sources
audio[0].src = chrome.extension.getURL("audio-files/Zenyatta_-_I_dreamt_I_was_a_butterfly.ogg");
audio[1].src = chrome.extension.getURL("audio-files/Zenyatta_-_A_chance_to_focus.ogg");
audio[2].src = chrome.extension.getURL("audio-files/Zenyatta_-_A_closed_mind_is_already_defeated.ogg");
audio[3].src = chrome.extension.getURL("audio-files/Zenyatta_-_A_disciplined_mind_is_your_most_dependable_ally.ogg");
audio[4].src = chrome.extension.getURL("audio-files/Zenyatta_-_A_lesson_in_humility.ogg");
audio[5].src = chrome.extension.getURL("audio-files/Zenyatta_-_A_warriors_greatest_weapon_is_patience.ogg");
audio[6].src = chrome.extension.getURL("audio-files/Zenyatta_-_Adversity_is_an_opportunity_for_change.ogg");
audio[7].src = chrome.extension.getURL("audio-files/Zenyatta_-_All-Knowing.ogg");
audio[8].src = chrome.extension.getURL("audio-files/Zenyatta_-_Always_strive_for_improvement.ogg");
audio[9].src = chrome.extension.getURL("audio-files/Zenyatta_-_And_I_will_watch_your_back_in_turn.ogg");
audio[10].src = chrome.extension.getURL("audio-files/Zenyatta_-_Bask_in_the_shadow_of_doubt.ogg");
audio[11].src = chrome.extension.getURL("audio-files/Zenyatta_-_Be_one_with_the_Universe.ogg");
audio[12].src = chrome.extension.getURL("audio-files/Zenyatta_-_Consider_only_victory,_make_defeat_an_impossibility_in_your_mind.ogg");
audio[13].src = chrome.extension.getURL("audio-files/Zenyatta_-_Do_I_think,_does_a_submarine_swim.ogg");
audio[14].src = chrome.extension.getURL("audio-files/Zenyatta_-_Do_not_be_discouraged_everyone_begins_in_ignorance.ogg");
audio[15].src = chrome.extension.getURL("audio-files/Zenyatta_-_Eager_to_Learn.ogg");
audio[16].src = chrome.extension.getURL("audio-files/Zenyatta_-_Embrace_tranquility.ogg");
audio[17].src = chrome.extension.getURL("audio-files/Zenyatta_-_Every_rooster_crows_in_its_own_pen.ogg");
audio[18].src = chrome.extension.getURL("audio-files/Zenyatta_-_Excellence_is_its_own_reward.ogg");
audio[19].src = chrome.extension.getURL("audio-files/Zenyatta_-_Experience_tranquility.ogg");
audio[20].src = chrome.extension.getURL("audio-files/Zenyatta_-_Falter_now,_and_we_will_succumb_to_defeat.ogg");
audio[21].src = chrome.extension.getURL("audio-files/Zenyatta_-_Free_your_mind.ogg");
audio[22].src = chrome.extension.getURL("audio-files/Zenyatta_-_Gaze_into_the_Iris.ogg");
audio[23].src = chrome.extension.getURL("audio-files/Zenyatta_-_Hatred_is_not_strategy.ogg");
audio[24].src = chrome.extension.getURL("audio-files/Zenyatta_-_How_Disappointing.ogg");
audio[25].src = chrome.extension.getURL("audio-files/Zenyatta_-_I_think,_therefore_I_am.ogg");
audio[26].src = chrome.extension.getURL("audio-files/Zenyatta_-_I_welcome_adversity.ogg");
audio[27].src = chrome.extension.getURL("audio-files/Zenyatta_-_If_you_do_not_bend,_you_break.ogg");
audio[28].src = chrome.extension.getURL("audio-files/Zenyatta_-_Impressive.ogg");
audio[29].src = chrome.extension.getURL("audio-files/Zenyatta_-_In_anger_you_defeat_only_yourself.ogg");
audio[30].src = chrome.extension.getURL("audio-files/Zenyatta_-_It_is_good_to_return,_but_am_I_still_welcome_here.ogg");
audio[31].src = chrome.extension.getURL("audio-files/Zenyatta_-_Justice_is_defined_by_the_hand_that_claims_it.ogg");
audio[32].src = chrome.extension.getURL("audio-files/Zenyatta_-_Life_is_more_than_a_series_of_ones_and_zeroes.ogg");
audio[33].src = chrome.extension.getURL("audio-files/Zenyatta_-_Move_too_quickly_and_you_overlook_much.ogg");
audio[34].src = chrome.extension.getURL("audio-files/Zenyatta_-_My_spirit_is_strong.ogg");
audio[35].src = chrome.extension.getURL("audio-files/Zenyatta_-_No_snowflake_ever_falls_in_the_wrong_place.ogg");
audio[36].src = chrome.extension.getURL("audio-files/Zenyatta_-_One_cannot_survive_on_strength_alone.ogg");
audio[37].src = chrome.extension.getURL("audio-files/Zenyatta_-_Open_your_mind.ogg");
audio[38].src = chrome.extension.getURL("audio-files/Zenyatta_-_Overconfidence_is_a_flimsy_shield.ogg");
audio[39].src = chrome.extension.getURL("audio-files/Zenyatta_-_Pain_is_an_excellent_teacher.ogg");
audio[40].src = chrome.extension.getURL("audio-files/Zenyatta_-_Peace_and_blessings_be_upon_you_all.ogg");
audio[41].src = chrome.extension.getURL("audio-files/Zenyatta_-_Peace_be_upon_you.ogg");
audio[42].src = chrome.extension.getURL("audio-files/Zenyatta_-_Repetition_is_the_path_to_mastery.ogg");
audio[43].src = chrome.extension.getURL("audio-files/Zenyatta_-_Revenge_is_not_justice.ogg");
audio[44].src = chrome.extension.getURL("audio-files/Zenyatta_-_Tell_me_your_thoughts,_my_friend.ogg");
audio[45].src = chrome.extension.getURL("audio-files/Zenyatta_-_The_outcome_is_not_preordained.ogg");
audio[46].src = chrome.extension.getURL("audio-files/Zenyatta_-_There_is_chaos_within_you.ogg");
audio[47].src = chrome.extension.getURL("audio-files/Zenyatta_-_Time_grows_short_attack.ogg");
audio[48].src = chrome.extension.getURL("audio-files/Zenyatta_-_Time_is_an_illusion.ogg");
audio[49].src = chrome.extension.getURL("audio-files/Zenyatta_-_To_hold_a_grudge_is_unhealthy-_for_you.ogg");
audio[50].src = chrome.extension.getURL("audio-files/Zenyatta_-_True_self_is_without_form.ogg");
audio[51].src = chrome.extension.getURL("audio-files/Zenyatta_-_Victory_is_within_our_grasp_hold_strong.ogg");
audio[52].src = chrome.extension.getURL("audio-files/Zenyatta_-_Walk_in_harmony.ogg");
audio[53].src = chrome.extension.getURL("audio-files/Zenyatta_-_We_are_in_harmony.ogg");
audio[54].src = chrome.extension.getURL("audio-files/Zenyatta_-_We_walk_in_harmony_my_student.ogg");
audio[55].src = chrome.extension.getURL("audio-files/Zenyatta_-_What_a_fascinating_place.ogg");
audio[56].src = chrome.extension.getURL("audio-files/Zenyatta_-_Wonderful.ogg");
audio[57].src = chrome.extension.getURL("audio-files/Zenyatta_-_You_are_your_own_worst_enemy.ogg");
audio[58].src = chrome.extension.getURL("audio-files/Zenyatta_-_You_have_much_to_learn.ogg");
audio[59].src = chrome.extension.getURL("audio-files/Zenyatta_-_You_must_learn_from_your_mistakes.ogg");
audio[60].src = chrome.extension.getURL("audio-files/Zenyatta_-_You_refuse_to_learn.ogg");
audio[61].src = chrome.extension.getURL("audio-files/Zenyatta_-_Your_weakness_is_revealed.ogg");
audio[62].src = chrome.extension.getURL("audio-files/Zenyatta_-_Zenyatta_is_here.ogg");
audio[63].src = chrome.extension.getURL("audio-files/Zenyatta_-_Experience_festivity.ogg");