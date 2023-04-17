import { useStore } from '@builder.io/mitosis';

type Props = {
    label: string;
}

export default function TestComponent(props: Props) {
    const state = useStore({ name: 'Foo' });

    return (
        <div>
            {props.label || 'Hello'} { state.name }! I can run in React, Vue, Solid or Svelte!
        </div>
    )
}