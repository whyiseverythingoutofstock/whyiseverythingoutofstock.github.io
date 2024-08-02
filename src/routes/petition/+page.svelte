<script lang="ts">
    import { pb } from "$lib/pocketbase";
    import { redirect } from '@sveltejs/kit';
    import { base } from '$app/paths';

    const nameRegex = /^(?=[a-zA-Z]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let name = "";
    let email = "";

    $: nameIsValid = nameRegex.test(name);
    $: emailIsValid = emailRegex.test(email);

    $: formIsValid = nameIsValid && emailIsValid;

    $: formSubmissionAttempt = false;

    $: displayNameError = formSubmissionAttempt && !nameIsValid

    $: displayEmailError = formSubmissionAttempt && !emailIsValid

    function submitForm(){
        if (formIsValid){
            const record = pb.collection('petitionSubmissions').create({
                name,
                email,
            })
            throw redirect(300, `${base}/petition/postsubmission`);
        }
        else{
            formSubmissionAttempt = true;
        }
    }
</script>


<div class = "bg-no-repeat bg-cover bg-center w-[100%] h-[88vh] flex content-center justify-center" style = "background-image: url(/mgssoPicture2.jpg)">
    <div class = "w-[100%] backdrop-blur-sm bg-neutral-900/50 flex content-center flex-col justify-center">
        <div class="mx-auto card p-4 w-1/2 text-token space-y-4">

            <h1 class = "h2 underline py-4">Join the fight.</h1>

            <label class="label">
                <span>Name</span>
                {#if displayNameError}
                <span class = "text-error-300">That's not a name! (3 to 16 characters, letters only)</span>
                {/if}
                <input class="input" type="text" placeholder="Input" bind:value={name} class:input-error={displayNameError}/>
            </label>

            <label class="label">
                <span>Email</span>
                {#if displayEmailError}
                <span class = "text-error-300">Enter a valid email.</span>
                {/if}
                <input class="input" type="text" placeholder="Input" bind:value={email} class:input-error={displayEmailError}/>
            </label>

            <div class = "text-right">
                <button class = "btn variant-filled"
                on:click = {submitForm}>Submit</button>
            </div>

        </div>
    </div>
</div>