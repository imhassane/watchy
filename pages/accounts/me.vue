<template>
    <div class="columns">
        <div class="column is-3">
            <account-resume />
        </div>
        <div class="column is-6">
            <h4 class="title is-4">Account settings</h4>
            <hr />
            <div>
                <div>
                    <p><strong>Change password</strong></p>
                    <change-password />
                    <hr />
                </div>
                <div>
                    <p><strong>Change email address</strong></p>
                    <change-email />
                    <hr />
                </div>
                <div>
                    <p><strong>Delete my account</strong></p>
                    <p style="margin-top: 5px">Deleting your account will not remove your datas from our database</p>
                    <p style="margin-bottom: 5px">You account will be considered non active and will be unaccessible</p>
                    <button class="button is-danger">I understand it, delete my account</button>
                </div>
            </div>
        </div>
        <div class="column is-3">
            <div>
                <div>
                    <list-form />
                    <hr />
                    <lists-list />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AccountResume from "~/components/accounts/account-resume";
import ListForm from "~/components/lists/list-form";
import ListsList from "~/components/lists/lists-list";
import ChangePassword from "~/components/forms/change-password";
import ChangeEmail from "~/components/forms/change-email";

export default {
    head: () => ({ title: "My account"}),
    components: { ListForm, ListsList, AccountResume, ChangePassword, ChangeEmail }
}
</script>