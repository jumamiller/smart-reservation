curl \
--header "section-token: c971a87f-df87-475b-86b9-4062827d58c0:090e805b-2e33-4823-b646-3cdef776c4dd" \
--header "Content-Type: application/json" \
--header "Accept: application/json" -d "{ \
\"hostname\": \"https://2038169600.kube.api.section.io/\", \
\"origin\": \"blank\", \
\"stackName\": \"kei\" \
}" "https://aperture.section.io/api/v1/account/3925/application/create"
