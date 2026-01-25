import { useMutation } from "@tanstack/react-query";
import { Lead } from "../utils/contentTypes";
import { insertLead } from "../api/api";

interface useInsertLeadProps {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export default function useInsertLead(props: useInsertLeadProps) {
  const mutation = useMutation({
    mutationFn: async (lead: Lead) => insertLead(lead),
    onSuccess: props.onSuccess,
    onError: props.onError,
  });

  return mutation;
}
